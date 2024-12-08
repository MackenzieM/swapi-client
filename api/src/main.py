from enum import verify

import requests
from fastapi import FastAPI

app = FastAPI()


@app.get("/api/cost-report")
def cost_report():
    starships = requests.get("https://swapi.info/api/starships", verify=False).json()
    films = requests.get("https://swapi.info/api/films", verify=False).json()

    films_to_ships = dict()
    for film in films:
        films_to_ships[film["title"]] = [{"name":starship['name'], "cost":starship['cost_in_credits']} for starship in starships if starship["url"] in film["starships"]]

    response = dict()
    response["film"] = films[0]["title"]
    response["starships"] = films_to_ships[films[0]["title"]]

    return response
