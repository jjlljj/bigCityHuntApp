export const fetchHunts = async() => {
  try {
    const url = "https://www.scavengerhunt.com/app/ios_ajax_json_hunt_locations.php/ios_ajax_hunt_locations.php?password=asf4fvadfv31das";
    const response = await fetch(url);

    if (response.status > 200) {
      throw new Error('Unable to get hunts');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error
  }
}
