
# In Python, the __new__ method is a special method used to create and return a new instance of a class. It is the first step in the object creation process. When you create a new instance of a class, Python internally calls the __new__ method to create the object before initializing it with the __init__ method.

# Here's a breakdown of how __new__ works:

# __new__: The method that actually creates the object. It's called before __init__.
# __init__: The method that initializes the object after it has been created by __new__



class Singelton:

    _instance = None;
    _counter = 0

    def __new__(cls):
        if not cls._instance:
            cls._instance = super(Singelton,cls).__new__(cls)
        print('new method is called')
        return cls._instance

    def __init__(self):
        print('constructor called')

    def increment(self):
        self._counter += 1

    def show_counter(self):
        return self._counter
        


s1 = Singelton()
s2 = Singelton()

s1.increment()
s1.increment()
s1.increment()
print(s1.show_counter())
print(s2.show_counter())
s2.increment()
s2.increment()
print(s1.show_counter())
print(s2.show_counter())