import axios from "axios";
import type {
  BookingRequest,
  BookingResponse,
  CamperDetails,
  CamperListResponse,
  CampersFilters,
  FiltersResponse,
  Review,
} from "@/types/camper";

export const CAMPERS_PER_PAGE = 4;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getCampers(
  page: number,
  filters: CampersFilters,
): Promise<CamperListResponse> {
  const activeFilters = Object.fromEntries(
    Object.entries(filters).filter(([, value]) => value.trim() !== ""),
  );

  const { data } = await api.get<CamperListResponse>("/campers", {
    params: { page, perPage: CAMPERS_PER_PAGE, ...activeFilters },
  });
  return data;
}

export async function getFilters(): Promise<FiltersResponse> {
  const { data } = await api.get<FiltersResponse>("/campers/filters");
  return data;
}

export async function getCamper(id: string): Promise<CamperDetails> {
  const { data } = await api.get<CamperDetails>(`/campers/${id}`);
  return data;
}

export async function getReviews(id: string): Promise<Review[]> {
  const { data } = await api.get<Review[]>(`/campers/${id}/reviews`);
  return data;
}

export async function postBooking(
  id: string,
  body: BookingRequest,
): Promise<BookingResponse> {
  const { data } = await api.post<BookingResponse>(
    `/campers/${id}/booking-requests`,
    body,
  );
  return data;
}