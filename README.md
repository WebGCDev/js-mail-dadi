# Mail e Gioco dei Dadi

```
Esercizio 1: Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Esercizio 2: Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

```

**Esercizio 1: MAIL**

- Genero un array che contenga le varie mail che avranno la verifica = true
- L'utente inserirà in Input l'email
- Utilizzo il ciclo for, per controllare se l'input dell'utente corrisponde a una delle mail presenti nell'elenco:
  Nel caso di inserimento positivo stampo in console un messaggio di verifica corretta, altrimenti ci sarà esito negativo e non si potrà accedere

**Esercizio 2: Gioco dei Dadi**

- Dichiaro con let i giocatori che parteciperanno alla sfida
- Assegno un numero casuale alle 2 variabili che andrò a creare con math.random
- Userò il metodo del confronto tra le 2 variabili, quella che avrà il numero maggiore vince!(Speriamo che l'utente riesca a battere il CPU!), ci può essere anche il pareggio se il PlayerHuman ottiene lo stesso numero del PlayerAi
