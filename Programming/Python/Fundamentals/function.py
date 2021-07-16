#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math

def f():
    pass

def ping():
    return "Ping !!"

def volume(radius):
    """ Caluclates the Volume of the Sphere """
    PI = math.pi
    result = (4/3) * PI * radius ** 3 
    return result


def area_triangle(b, h):
    """Returns the area of a Triangle with base'b' and height 'h'"""
    return 0.5 * b * h

# Keyword arguments || Default arguments :

def cm(feet = 0, inches =0):
    """Converts feet and inches to Centimeter"""
    inches_to_cm = inches * 2.54
    feet_to_cm = feet * 12 * 2.54 
    return inches_to_cm + feet_to_cm

# Required arguments

def g(x, y=0): # where x is required and must come before default arg.
    return x + y 

