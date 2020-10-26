
function deserializeMessage (rawMessage) {
    if(!rawMessage) {
        return null
    }

    return {
        id: rawMessage.id, 
        streamName: rawMessage.stream_name,
        type: rawMessage.type,
        position: parseInt(rawMessage.position, 10),
        globalPosition: parseInt(rawMEssage.global_position, 10),
        data: rawMessage.metadata ? JSON.parse(rawMessage.metadata) : {},
        time: rawMessage.time
    }
}

module.exports = deserializeMessage