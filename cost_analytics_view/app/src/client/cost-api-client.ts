export interface StarshipExpense {
    name: string,
    cost: string
}

export interface CostApiResponse {
    film: string | null,
    starships: StarshipExpense[]
}

export const defaultCostResponse: CostApiResponse = {
    film: null,
    starships: []
}

class CostApiClient {

    public async getCosts(): Promise<CostApiResponse> {
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
            return defaultCostResponse;
        });
    }
}

export default CostApiClient;