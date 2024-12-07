from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/cost-report")
def read_root():
    return {"Hello": "World"}


