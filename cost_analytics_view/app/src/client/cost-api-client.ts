export interface StarshipExpense {
    name: string,
    cost: string
}

export interface FilmExpense {
    film: string | null,
    starships: StarshipExpense[]
}

export const defaultCostResponse: FilmExpense[] = [];

class CostApiClient {

    public async getCosts(): Promise<FilmExpense[]> {
        return await fetch("http://localhost/api/cost-report", {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then( (response) => {
            console.log(response);
            return  response.json();
        })
        .catch((err) => {
            console.error("API returned in error");
            console.error(err);
            return [];
        });
    }
}

export default CostApiClient;