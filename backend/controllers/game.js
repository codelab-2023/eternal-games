const { GameStore, CategoryStore, WebsiteStore } = require('../models');
const { sendSuccess, sendError } = require('./utils');

const createGame = async (req, res) => {
  try {
    const gameInfo = req.body;

    if (!gameInfo) {
      return sendError(res, 'game data not found', null, 404);
    }

    const game = await GameStore.create(gameInfo);

    return sendSuccess(res, { data: game });
  } catch (error) {
    return sendError(res, 'Error while adding game', error);
  }
};

const getGame = async (req, res) => {
  try {
    const gameId = req.params.id;

    if (!gameId) {
      return sendError(res, 'gameId not found', null, 404);
    }

    const game = await GameStore.findById(gameId).populate('categories');

    return sendSuccess(res, { game });
  } catch (error) {
    return sendError(res, 'Error while getting game', error);
  }
};

const getGameList = async (req, res) => {
  try {
    const games = await GameStore.find();

    return sendSuccess(res, { games });
  } catch (error) {
    return sendError(res, 'can\'t find game list', error);
  }
};

const dashboardCards = async (req, res) => {
  try {
    const games = await GameStore.countDocuments();
    const categories = await CategoryStore.countDocuments();
    const websites = await WebsiteStore.countDocuments();

    return sendSuccess(res, {
      categoryCount: categories,
      gameCount: games,
      websiteCount: websites
    });
  } catch (error) {
    return sendError(res, 'can\'t find game list', error);
  }
};

const updateGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    const {
      gameName,
      description,
      thumbnail,
      gamePreview,
      rating,
      developer,
      technology,
      platform,
      shortDescription,
      status,
      categories,
      url,
      isSupportMobile,
      isSupportDesktop,
      likes,
      disLikes
    } = req.body;

    if (!gameId) {
      return sendError(res, 'invalid gameId', null, 404);
    }

    const updateGame = await GameStore.updateOne({ _id: gameId }, {
      gameName,
      description,
      thumbnail,
      gamePreview,
      rating,
      developer,
      technology,
      platform,
      shortDescription,
      status,
      categories,
      url,
      isSupportMobile,
      isSupportDesktop,
      likes,
      disLikes
    });

    if (!updateGame) {
      return sendError(res, 'Game not found', null, 404);
    }

    return sendSuccess(res, 'Game updated successfully');
  } catch (error) {
    return sendError(res, 'internal server error', error, 404);
  }
};

const deleteGames = async (req, res) => {
  try {
    const gameId = req.params.id;

    const deleteGame = await GameStore.findByIdAndDelete(gameId);

    if (!deleteGame) {
      return sendError(res, 'game not found', null, 404);
    }

    return sendSuccess(res, { deleteGame });
  } catch (error) {
    return sendError(res, 'Internal server error', error, 404);
  }
};

module.exports = {
  createGame,
  getGame,
  getGameList,
  dashboardCards,
  updateGame,
  deleteGames
};