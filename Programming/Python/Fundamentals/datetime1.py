#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Date time format (Day_Name, Month Day, Year)
import datetime

birthday = datetime.date(1994,5,30)

# Old way: (String format time)
print(birthday.strftime("%A, %B %d, %Y"))

# New way: 

message = "I was Born : {:%A, %B %d, %Y}."
print(message.format(birthday))

# Spacex lauch reusable rockets

launch_date = datetime.date(2017, 3, 30)
launch_time = datetime.time(22,27,0)

launch_datetime = datetime.datetime(2017, 3, 30, 22, 27, 0)

print(launch_date)
print(launch_time)
print(launch_datetime)

# To get the date now
now = datetime.datetime.today()


# Converting the string to datetime: (String parse time )

moon_landing = "7/20/1969"
moon_landing_datetime = datetime.datetime.strptime(moon_landing, "%m/%d/%Y")
print(moon_landing_datetime)
