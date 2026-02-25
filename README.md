
# Indovinazionamento Colorato - Guida Git Setup

## Clone the Repository

```bash
git clone https://github.com/GabrieleRossiITS/IndovizionamentoColorato.git
cd IndovizionamentoColorato
```

## Pull delle ultime modifiche (non sempre necessario)

```bash
git pull origin main
```

## Crea e Sposta di branch

```bash
git checkout -b nome-della-branch
```

## Fai le modifiche

## Controlla le modifiche

```bash
git status
```

## Aggiungi le modifiche

```bash
git add .
```

## Genera il Commit

*IL MESSAGGIO DEVE ESSERCI, DEVE ESSERE BREVE E IN INGLESE*

```bash
git commit -m "messaggio" 
```

Example:

```bash
git commit -m "chore(gioco.js): added color change when guessing"
```

## Push delle modifiche

```bash
git push origin nome-branch
```
