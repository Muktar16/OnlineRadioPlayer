const PlatformUrl = import.meta.env.VITE_BASE_URL || "";
export const StationEndpoints = {
  getTopvoteStations: PlatformUrl + "/stations/topvote/100",
};