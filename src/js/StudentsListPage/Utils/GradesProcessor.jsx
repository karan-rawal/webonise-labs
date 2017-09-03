import { GRADE_PERC, GRADE } from '../Constants';

/**
 * Helper class for operations related to Grades.
 * 
 * @export
 * @class GradesProcessor
 */
export default class GradesProcessor {
  /**
   * Returns the grade as per the percentage provided
   * 
   * @static
   * @param {any} percentage 
   * @returns 
   * @memberof GradesProcessor
   */
  static getGrade(percentage) {
    if (percentage >= GRADE_PERC.DISTINCTION_PERC) {
      return GRADE.DISTINCTION;
    } else if (percentage >= GRADE_PERC.FIRST_CLASS_PERC) {
      return GRADE.FIRST_CLASS;
    } else if (percentage >= GRADE_PERC.SECOND_CLASS_PERC) {
      return GRADE.SECOND_CLASS;
    }
    return GRADE.FAILED;
  }
}
