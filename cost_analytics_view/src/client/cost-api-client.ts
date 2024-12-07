
export interface StarshipExpense {
    name: string,
    cost: number
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
        return await fetch("http://localhost:8000/cost-report")
            .then((response) => response.json())
            .catch((err) => {
                console.error("API returned in error");
                console.error(err);
                return defaultCostResponse;
            });
    }
}

export default CostApiClient;