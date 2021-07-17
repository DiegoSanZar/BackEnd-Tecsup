#escribir una funcion que devuelva true si una palabra es palindroma

# Metodo 1
palabra = input()
palabra_invertida = palabra[::-1]
if(palabra == palabra_invertida):
    print("Es palindroma")
else:
    print("Noes palindroma")
