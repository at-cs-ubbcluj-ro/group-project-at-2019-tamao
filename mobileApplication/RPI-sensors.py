import RPi.GPIO as GPIO  
from time import sleep
import requests
from firebase import firebase
import datetime
 
GPIO.setmode(GPIO.BOARD)     # set up BOARD GPIO numbering, could also be BCM  
GPIO.setup(7, GPIO.IN)    # set GPIO04 as input (raindrops module)
GPIO.setup(18,GPIO.IN)    # set GPIO24 as input (water sensor)
GPIO.setup(3, GPIO.OUT)   # set GPIO02 as an output (LED)  
GPIO.output(3, 0)
firebase = firebase.FirebaseApplication('https://android-things-group.firebaseio.com', None)
 
#https://android-things-group.firebaseio.com
#AIzaSyCQkt7jn96UStHuidROSlO4Y93SRFSt9_g
 
try:  
    while True:
        print("Output raindrops " + str(GPIO.input(7)-1) + " water sensor " + str(GPIO.input(18)))
        if GPIO.input(18) == 1 and GPIO.input(7) == 0:
            GPIO.output(3, 1)
            result = firebase.post('/history', {'water-sensor':str(datetime.datetime.now()), 'rain-sensor':str(datetime.datetime.now())})
            print(str(result))
        else:
            if GPIO.input(18): # if port 7 == 1  
                #print("Port 7 is 1/HIGH/True - LED ON")  
                GPIO.output(3, 1)         # set port/pin value to 1/HIGH/True
               
            elif GPIO.input(7) == 0:  
                #print("Port 7 is 0/LOW/False - LED OFF")
                GPIO.output(3, 1)         # set port/pin value to 0/LOW/False
                #result = firebase.post('/history', {'water-sensor':str(datetime.datetime.now())})
                #print(str(result))
            else:
                GPIO.output(3, 0)         # set port/pin value to 0/LOW/False
       
        sleep(0.1)         # wait 1 seconds (0.1)  
 
finally:                    
    GPIO.cleanup()
