FROM python:3.13

WORKDIR /src

COPY ./ /src
COPY ./requirements.txt /src/requirements.txt

RUN pip install "fastapi[standard]"
RUN pip install -r requirements.txt

CMD ["fastapi", "run", "src/main.py"]