# Sito web di MERGE-it

Questo repository contiene il sito web di MERGE-it. I contenuti sono rilasciati
sotto licenza Creative Commons BY-SA 4.0.

## Build del sito

Per fare una build del sito bisogna avere Python 2 e [Lektor][lektor]
installati. Dopo aver fatto ciò, basta invocare make per eseguire la build:

```
$ make
```

La build verrà salvata in `build/`. Lektor dispone anche di un server web di
sviluppo, con rebuild automatico e pannello di modifica dal browser. Per
avviarlo basta eseguire il comando:

```
$ make server
```

Infine, per pulire i file generati si può eseguire il comando:

```
$ make clean
```

> **Nota:** attualmente ci sono alcuni problemi con il riconoscimento delle
> dipendenze in Lektor, quindi quando si modifica una pagina non tutti i
> cambiamenti potrebbero essere applicati. Per ovviare a ciò si può effettuare
> un `make clean` prima della build.

[lektor]: https://www.getlektor.com
