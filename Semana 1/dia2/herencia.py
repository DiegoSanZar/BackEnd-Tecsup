class Pet():
    def __init__(self, name):
        self.name = name
    
    def sleep(self):
        print("zzz") 


class Perro(Pet):
   pass
class Gato(Pet):
   pass
class Ave(Pet):
    def fly(self):
        print("wooou")

jagger = Perro("Jagger")
floki = Gato("Floki")
Pajaro = Ave("pajaro")

jagger.sleep()
floki.sleep()
Pajaro.sleep()
Pajaro.fly()