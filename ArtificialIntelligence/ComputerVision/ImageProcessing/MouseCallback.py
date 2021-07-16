import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline

img_zeros = np.zeros(shape=(512,512,3))

# Funciton
def draw_circle(event, x, y, flags, param):
    """Draw circle with mousecallback"""
    
    if event == cv2.EVENT_LBUTTONDOWN:
        cv2.circle(img_zeros, (x,y), 10, (0,255,0), 5)
    elif event == cv2.EVENT_RBUTTONDOWN:
        cv2.circle(img_zeros, (x,y), 10, (255,0,0), -1)     

cv2.namedWindow(winname='my_drawing')
cv2.setMouseCallback('my_drawing', draw_circle)
 
while True:
    
    cv2.imshow('my_drawing', img_zeros)
    
    if cv2.waitKey(20) & 0xFF == 27:
        break
        
cv2.destroyAllWindows()