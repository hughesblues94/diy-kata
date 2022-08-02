const reachDestination = (distance, speed) => {
  const arrival = distance / speed;
  const rounded = Math.round(arrival / 0.5) * 0.5;
  return `I should be there in ${rounded} hours.`;
};

module.exports = reachDestination;
