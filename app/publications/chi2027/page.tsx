import SubmissionPage from "../../components/SubmissionPage";
import { submissions } from "../../data/submissions";

export default function CHI2027() {
    return <SubmissionPage publication={submissions[0]} />;
}
