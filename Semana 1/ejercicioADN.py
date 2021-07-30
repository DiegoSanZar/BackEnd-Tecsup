
adn_string = input()

def complement(adn):
    nucleotidos={
        "A" : "T",
        "T" : "A",
        "C" : "G",
        "G" : "C"
    }

    comp = ""
    for i in adn:
        comp = comp + nucleotidos[i]

    return comp

adn_string = input()
print(complement(adn_string))