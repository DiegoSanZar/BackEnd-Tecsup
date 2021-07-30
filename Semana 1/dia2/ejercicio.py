class vehiculo:
    def __init__(self, ruedas=0, puertas=0):
        self.ruedas = ruedas
        self.puertas = puertas
    
class auto(vehiculo):
    def __init__(self):
        super().__init__(4, 4)

class moto(vehiculo):
    def __init__(self):
        super().__init__(2, 0)

class Camioneta(vehiculo):
    def __init__(self):
        super().__init__(puertas = 4)

mi_moto = moto()

print(f"Mi moto tiene {mi_moto.puertas} puertas")
print(f"Mi moto tiene {mi_moto.ruedas} ruedas")

