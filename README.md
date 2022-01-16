# Kolokwium
## Przygotowanie do kolokwium:
### Pobranie i załadowanie dokumentacji
1) Proszę pobrać gałąź kolokwium w formie pliku zip. A następnie wypakować jego zawartość.
  <img src="Img/download_zip.png" width=350 height=300></img>
2) Proszę uruchomić przeglądarkę i przejść pod adres: [https://devdocs.io/](https://devdocs.io/)
3) Następnie proszę przejść do `Preferences -> Import`.
  ![Alt text](Img/2020_01_17_10_19_11_DevDocs_API_Documentation.png?raw=true)
  ![Alt text](Img/2020_01_17_10_20_08_Preferences_DevDocs.png?raw=true)
4) Proszę wybrać plik `../Documentation/devdocs.json` znajdujący się w pobranym repozytorium.
  ![Alt text](Img/2020_01_17_10_21_04_Otwieranie.png?raw=true)
5) W ostatnim kroku proszę się upewnić że wszystkie potrzebne pliki z dokumentacją są zainstalowane.
  ![Alt text](Img/2020_01_17_10_26_06_PSI.png?raw=true)
  ![Alt text](Img/2020_01_17_10_26_41_DevDocs_API_Documentation.png?raw=true)
  ![Alt text](Img/2020_01_17_10_28_09_Offline_DevDocs.png?raw=true)

### Pobranie i przetestowanie szablonów kolokwium
1) Proszę otworzyć folder `Templates` przy pomocy Visual Studio Code.

    <img src="Img/open_folder.png" width=400 height=300></img>

    <img src="Img/open_folder2.png" width=400 height=300></img>

    <img src="Img/open_folder3.png" width=400 height=300></img>

2) Proszę w Visual Studio Code otworzyć nowy terminal `Terminal -> New Terminal`.


#### Szablon Angular
1) Proszę przejść do folderu `kolokwium-angular` przy pomocy poniższego polecenia.

    ```
    cd kolokwium-angular
    ```
  
2) Nastepnie proszę pobrać wszystkie potrzebne biblioteki przy pomocy `npm`. W tym celu proszę wykonać poniższe polecenie.
  
    ```
    npm install
    ```
  
3) W celu weryfikacji poprawności działania aplikacji proszę ją uruchomić.
  
    ```
    npm start
    ```
  
   Aplikacja powinna być dostępna pod adresem: [http://localhost:4200](http://localhost:4200).
  ![Alt text](Img/angular_run.png?raw=true)
4) Jeśli aplikacja działa poprawnie proszę zamknąć przy pomocy kombinacji klawiszy `ctrl + c`.
5) Proszę przejść do folderu wyżej (`Templates`), przy pomocy poniższego polecenia.

    ```
    cd ..
    ```


#### Szablon React
1) Proszę przejść do folderu `kolokwium-react` przy pomocy poniższego polecenia.
  
    ```
    cd kolokwium-react
    ```
    
2) Nastepnie proszę pobrać wszystkie potrzebne biblioteki przy pomocy `npm`. W tym celu proszę wykonać poniższe polecenie.

    ```
    npm install
    ```
    
3) W celu weryfikacji poprawności działania aplikacji proszę ją uruchomić.

    ```
    npm start
    ```

   Aplikacja powinna być dostępna pod adresem: [http://localhost:3000](http://localhost:3000).
  ![Alt text](Img/react_run.png?raw=true)
4) Jeśli aplikacja działa poprawnie proszę zamknąć przy pomocy kombinacji klawiszy `ctrl + c`.
5) Proszę przejść do folderu wyżej (`Templates`), przy pomocy poniższego polecenia.

    ```
    cd ..
    ```


#### Szablon Web API
1) Proszę przejść do folderu `Kolokwium.Api` przy pomocy poniższego polecenia.

    ```
    cd Kolokwium.Api
    ```
  
2) W celu weryfikacji poprawności działania aplikacji proszę, ją uruchomić.

    ```
    dotnet run
    ```
  
   Web API powinno być dostępne pod adresem: `http://localhost:5000/api/{controller}` 
   
   Aplikacja Swagger jest dostępna pod adresem: [http://localhost:5000/swagger](http://localhost:5000/swagger).
  ![Alt text](Img/swagger.png?raw=true)
  
4) Jeśli aplikacja działa poprawnie proszę zamknąć przy pomocy kombinacji klawiszy `ctrl + c`.
5) Proszę przejść do folderu wyżej (`Templates`), przy pomocy poniższego polecenia.

    ```
    cd ..
    ```

```diff
- Życzę Państwu powodzenia na kolokwium! :)
```
