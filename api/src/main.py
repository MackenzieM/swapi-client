from enum import verify
from http.client import HTTPException

import requests
from fastapi import FastAPI

app = FastAPI()

@app.get("/api/cost-report")
def cost_report():
    try:
        starships = requests.get("https://swapi.info/api/starships", verify=False).json()
        films = requests.get("https://swapi.info/api/films", verify=False).json()
    except:
        print("Error caught calling SWAPI")
        raise HTTPException(status_code=502, detail="Unable to fetch data")

    response = build_report(films, starships)

    return response


def build_report(films, starships):
    films_to_ships = dict()
    for film in films:
        films_to_ships[film["title"]] = [{"name": starship['name'], "cost": starship['cost_in_credits']} for starship in
                                         starships if starship["url"] in film["starships"]]
    response = []
    for film in films:
        film_response = dict()
        film_response["film"] = film["title"]
        film_response["starships"] = films_to_ships[film["title"]]
        response.append(film_response)
    return response
