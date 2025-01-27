import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createKeywordTypeNode } from "typescript";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface Location {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
}

type InitialState = {
  arrLocations: Location[];
  location: Location;
  arrLocationPageIndex: Location[];
  totalRow: number;
};

const initialState: InitialState = {
  arrLocations: [],
  location: {} as Location,
  arrLocationPageIndex: [],
  totalRow: 0,
};

const locationsReducer = createSlice({
  name: "locationsReducer",
  initialState,
  reducers: {
    setArrLocations: (
      state: InitialState,
      action: PayloadAction<Location[]>
    ) => {
      state.arrLocations = action.payload;
    },
    setLocationById: (state: InitialState, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    setArrLocationByPageIndex: (
      state: InitialState,
      action: PayloadAction<Location[]>
    ) => {
      state.arrLocationPageIndex = action.payload;
    },
    setTotalRow: (state: InitialState, action: PayloadAction<number>) => {
      state.totalRow = action.payload;
    },
  },
});

export const {
  setArrLocations,
  setLocationById,
  setArrLocationByPageIndex,
  setTotalRow,
} = locationsReducer.actions;

export default locationsReducer.reducer;

// call api
export const getLocationsApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/vi-tri");
      dispatch(setArrLocations(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getLocationByIdApi = (locationId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/vi-tri/${locationId}`);
      dispatch(setLocationById(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getLocationPaginationApi = (
  pageIndex: number,
  pageSize: number,
  keyword?: string
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        `/vi-tri/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`
      );
      console.log(result.data.content.data);
      dispatch(setArrLocationByPageIndex(result.data.content.data));
      // console.log(result.data.content.totalRow);
      dispatch(setTotalRow(result.data.content.totalRow));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteLocationApi =  (viTri: number) => {
  return async () => {
    try {
      alert('Delete Successfullt !!')
      const result = await http.delete(`/vi-tri/${viTri}`);
      console.log(result.data.content);
    } catch (err) {
      console.log(err);
    }
  }
};
