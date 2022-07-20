conn = new Mongo();

// Creating database 'player_data'
db = conn.getDB("player_data");

// // Creating credentials for data population script
db.createUser(
    {
        user: _getEnv("DATA_POPULATION_MONGO_USERNAME"),
        pwd: _getEnv("DATA_POPULATION_MONGO_PASSWORD"),
        roles: [
            "readWrite"
        ]
    }
);

// // Creating credentials for application
db.createUser(
    {
        user: _getEnv("DRAFT_BOARD_MONGO_USERNAME"),
        pwd: _getEnv("DRAFT_BOARD_MONGO_PASSWORD"),
        roles: [
            "read"
        ]
    }
);