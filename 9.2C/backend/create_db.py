import pymysql
import mysql.connector


def create_database():
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password=""  
    )
    cursor = connection.cursor()
    cursor.execute("CREATE DATABASE IF NOT EXISTS unit")
    cursor.close()
    connection.close()