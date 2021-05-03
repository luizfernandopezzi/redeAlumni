/*

^(Conjunto de Regras)(Conjunto de Regras)(...).{x,y}$ = inicio com ^ e fim com $, entre ^ e $ coloca-se o
                                                        (Conjunto de Regras) e .{min,max} detrermina o número
                                                        mín de caracteres e número máx de caracteres;

(?=) = início com ?= significa que permiti-se a utilização dos caracterese seguintes contidos em [];
(?!) = início com ?! significa que não é permitido a utilização dos caracteres seguintes contidos em[];
(?=.) = o . logo apos ?= significa que todos os caracteres são permitidos, menos quebra de linha;
(?=.*) = o * significa que é necessário ter ao menos um dos seguintes caracteres;
(?=.*[a-z]) = entre os [] colocamos o conjunto de caracteres em questão, neste caso, de a até z, minúsculos;


(?=.*[a-z]) = permite-se colocar qualquer caracter de a até z, sendo necessário ao menos um
              caracter de a até z, não sendo permitido quebra de linha. Ou seja, ao menos um caractere deve ser
              letra minúscula.

(?=.*[A-Z]) = permite-se colocar qualquer caracter de A até Z, sendo necessário ao menos um caracter de A até Z,
              não sendo permitido quebra de linha. Ou seja, ao menos um caracter deve ser letra maíscula.

(?=.*[0-9]) = permite-se colocar caracteres numéricos entre 0 e 9, sendo necessário ao menos um caractere
              numérico e não sendo permitido quebra de linha. Ou seja, ao menos um caractere deve ser
              um número de 0 a 9.

(?!.*[ !@#$%^&*_=+-]) = não é permitido colocar os caracteres de símbolo contidos nos []. Também não é permitido
                        quebra de linha, e não é permitido colocar ao menos um caracter de símbolo.

.{6,12} = número mínimo de caracteres é 6 e número máximo de caracteres é 12. Assim, evita-se utilizar os atributos
          minlenght="" e maxlenght="" no interior do elemento de input password do HTML.

^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$
*/