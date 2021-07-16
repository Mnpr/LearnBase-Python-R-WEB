import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline


drawing = False # true if mouse pressed down | false = mouse lifted back
ix, iy = -1,-1

# Function Draw
def draw_rectangle(event, x, y, flags, params):
    global ix, iy, drawing
    
    if event == cv.EVENT_LBUTTONDOWN:
        drawing = True
        ix, iy = x,y
        
    elif event == cv.EVENT_MOUSEMOVE:
        if drawing == True:
            cv.rectangle(img_zeros,(ix,iy),(x,y), (0,0,255), thickness=-1)
    elif event == cv.EVENT_LBUTTONUP:
            drawing = False
            cv.rectangle(img_zeros,(ix,iy),(x,y), (0,0,255), thickness=-1)
            
    
# Callback
    
# Img Display
img_zeros = np.zeros(shape=(512,512,3))

cv.namedWindow(winname='my_drawing')
cv.setMouseCallback('my_drawing', draw_rectangle)

while True:
    cv.imshow('my_drawing', img_zeros)
    if cv.waitKey(1) & 0xFF == 27:
        break
        
cv.destroyAllWindows()