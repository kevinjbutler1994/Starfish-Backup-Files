# Generated by Django 5.0.3 on 2024-04-01 14:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cohort',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('subject', models.CharField(choices=[('SEI', 'Software Engineering Immersive'), ('UXDI', 'User Experience Development Immersive'), ('DSI', 'Data Science Immersive')], max_length=5)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('cohort', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='students', to='students.cohort')),
            ],
        ),
    ]
