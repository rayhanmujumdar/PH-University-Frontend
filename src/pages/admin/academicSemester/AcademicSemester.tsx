import { useGetAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

export default function AcademicSemester() {
    const { data } = useGetAcademicSemesterQuery(undefined)
    console.log(data);
    return (
        <div>AcademicSemester</div>
    )
}
