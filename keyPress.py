import keyboard
import sys
import time

document = open("textFile.txt", "a")

if (len(sys.argv) == 1):
    document.write("I was given no key!\n")
    document.close()
else:
    document.write("I was given the: " + str(sys.argv[1]) + " key!\n")
    document.close()
    keyboard.press(str(sys.argv[1]))

    time.sleep(0.2)
    keyboard.release(str(sys.argv[1]))
    print("pressed the " + str(sys.argv[1]) + " key!")

