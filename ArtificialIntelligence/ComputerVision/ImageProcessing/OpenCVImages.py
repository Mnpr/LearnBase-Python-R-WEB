import cv2  
  
# Reading an image in default mode 
image = cv2.imread('./ImgResources/owl.jpeg') 

cv2.rectangle(image, pt1=(171,44), pt2=(288,128), color=(255,0,0), thickness=5) 

# Window name in which image is displayed 
window_name = 'image'
while True:
    cv2.imshow(window_name, image) 

    #waits for user to press any key 
    #(this is necessary to avoid Python kernel form crashing) 
    if cv2.waitKey(0) & 0xFF == 27:
        break

cv2.waitKey(0)  
  
#closing all open windows  
cv2.destroyAllWindows()
