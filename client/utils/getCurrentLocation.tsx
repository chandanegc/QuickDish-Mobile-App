import * as Location from "expo-location";

/**
 * Get the current location name (city, area, etc.) using reverse geocoding
 * @returns A formatted location string or null if failed
 */
interface LocationData {
  location: string | null;
  latitude: number;
  longitude: number;
}

export async function getCurrentLocationName(): Promise<LocationData | null> {
  try {
    // Ask for location permission
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Location permission not granted");
      return null;
    }

    // Get current position
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });

    console.log(location.coords.longitude);
    // Reverse geocode to get address
    const geoCode = await Location.reverseGeocodeAsync(location.coords);
    if (geoCode.length > 0) {
      const place = geoCode[0];
      const formatted = ` ${place.city || place.subregion || place.street}, ${place.region || ""}, ${place.country||""}`;
      return {location:formatted, latitude:location.coords.latitude, longitude:location.coords.longitude};
    }

    return null;
  } catch (error) {
    console.log("Error getting location name:", error);
    return null;
  }
}
