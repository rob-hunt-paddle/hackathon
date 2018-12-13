export const updateCountry = (country) => {
  console.log('country action creator')
  return {
    type: 'UPDATE_COUNTRY',
    country,
  }
}
