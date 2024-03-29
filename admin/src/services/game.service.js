import axiosInstance from './axiosInstance';

export default class gameService {
  static async getGameList() {
    try {
      const response = await axiosInstance.get('/v1/games');

      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  static async getGame(id) {
    try {
      const response = await axiosInstance.get(`/v1/games/${id}`);

      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  static async dashboardCards() {
    try {
      const response = await axiosInstance.get('/v1/games/dashboard-cards');
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  static async createGames(game) {
    {
      try {
        const response = await axiosInstance.post('/v1/games/create', {
          ...game
        });

        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  static async updateGame(gameId, game) {
    try {
      const response = await axiosInstance.put(`/v1/games/${gameId}`, {
        ...game
      });

      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  static async deleteGame(gameId) {
    try {
      const response = await axiosInstance.delete(`/v1/games/${gameId}`);

      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

}