import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, EmailStr

class BookingRequest(BaseModel):
    name: str = Field(..., min_length=2)
    phone: str = Field(..., min_length=10)
    activity: str
    day: str
    time: str
    message: str = ""

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Processes booking requests and sends email notifications
    Args: event - dict with httpMethod, body, queryStringParameters
          context - object with request_id attribute
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    booking = BookingRequest(**body_data)
    
    email_config = os.environ.get('EMAIL_SERVICE_KEY', '')
    
    activity_names = {
        'archery': 'Стрельба из лука',
        'darts': 'Дартс',
        'knives': 'Метание ножей',
        'weapons': 'Разборка автоматов',
        'flanking': 'Фланкировка',
        'medicine': 'Тактическая медицина',
        'museum': 'Посещение музея'
    }
    
    day_names = {
        'monday': 'Понедельник',
        'tuesday': 'Вторник',
        'wednesday': 'Среда',
        'thursday': 'Четверг',
        'friday': 'Пятница',
        'saturday': 'Суббота',
        'sunday': 'Воскресенье'
    }
    
    activity_display = activity_names.get(booking.activity, booking.activity)
    day_display = day_names.get(booking.day, booking.day)
    
    email_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #CD7F32;">Новая заявка на занятие</h2>
        <p><strong>Имя:</strong> {booking.name}</p>
        <p><strong>Телефон:</strong> {booking.phone}</p>
        <p><strong>Занятие:</strong> {activity_display}</p>
        <p><strong>День:</strong> {day_display}</p>
        <p><strong>Время:</strong> {booking.time}</p>
        {f'<p><strong>Сообщение:</strong> {booking.message}</p>' if booking.message else ''}
        <hr style="border-color: #CD7F32;">
        <p style="font-size: 12px; color: #666;">Клуб Исторической Реконструкции</p>
    </body>
    </html>
    """
    
    if email_config and email_config.startswith('smtp://'):
        try:
            parts = email_config.replace('smtp://', '').split('@')
            user_pass = parts[0].split(':')
            smtp_host = parts[1].split(':')
            
            username = user_pass[0]
            password = user_pass[1]
            host = smtp_host[0]
            port = int(smtp_host[1])
            
            msg = MIMEMultipart('alternative')
            msg['Subject'] = f'Новая заявка: {activity_display} - {booking.name}'
            msg['From'] = username
            msg['To'] = 'hello-111alena@yandex.ru'
            
            html_part = MIMEText(email_body, 'html', 'utf-8')
            msg.attach(html_part)
            
            with smtplib.SMTP_SSL(host, port) as server:
                server.login(username, password)
                server.send_message(msg)
            
            email_sent = True
        except Exception as e:
            email_sent = False
            error_msg = str(e)
    else:
        email_sent = False
        error_msg = 'Email not configured'
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'message': 'Заявка принята',
            'email_sent': email_sent,
            'booking': {
                'name': booking.name,
                'phone': booking.phone,
                'activity': activity_display,
                'day': day_display,
                'time': booking.time
            }
        }, ensure_ascii=False)
    }
