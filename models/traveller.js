const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, journey) => runningTotal + journey.distance, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modesOfTransport = [];
  this.journeys.forEach(function(journey){
    if (!modesOfTransport.includes(journey.transport)){
      modesOfTransport.push(journey.transport);
    };
  });
  return modesOfTransport;
};


module.exports = Traveller;
