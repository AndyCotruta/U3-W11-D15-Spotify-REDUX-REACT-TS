export const ADD_GOOD_MORNING: string = "ADD_GOOD_MORNING";
export const ADD_RECENTLY_PLAYED: string = "ADD_RECENTLY_PLAYED";
export const ADD_SHOWS_TO_TRY: string = "ADD_SHOWS_TO_TRY";

export const fetchAlbumAction: any =
  (endPoint: string, options: any) =>
  async (dispatch: any, endPoint: string, options: any) => {
    let response = await fetch(endPoint, options);
    try {
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch({
          type: ADD_GOOD_MORNING,
          payload: data,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
