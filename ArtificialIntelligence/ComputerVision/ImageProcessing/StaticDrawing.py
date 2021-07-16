import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline

blank_img = np.zeros(shape=(512,512,3), dtype=np.int16)

cv2.rectangle(blank_img, pt1=(300,200), pt2=(400,350), color=(255,0,0), thickness=5) 
cv2.circle(img=blank_img, center=(200,300), radius=50, color=(0,255,0), thickness=-1) # fill => thickness (-1)
cv2.line(blank_img, pt1=(50,300), pt2=(350,50),color=(0,0,255), thickness=10)

font= cv2.FONT_HERSHEY_SIMPLEX
cv2.putText(blank_img, text='Drawing on Img', org=(10,450), fontFace=font, fontScale=2, color=(255,255,255), thickness=5, lineType=cv2.LINE_AA) #bottom-left

vertices = np.array([ [50,25],[100,200],[200,25],[25,125],[200,125] ], dtype=np.int32) # add 3rd dimension '1' incl. color channel
cv2.polylines(blank_img, [vertices], isClosed=True, color=(0,255,0), thickness=5)

plt.imshow(blank_img)