def deco(func):
    print("before myfunc() called.")
    # func()
    print("  after myfunc() called.")
    return fuck
 
def fuck():
 	print 'fas'

@deco
def myfunc():
    print("asa.")
 
myfunc()
