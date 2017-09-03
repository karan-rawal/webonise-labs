import GradeProcessor from '../Utils/GradesProcessor';

/**
 * Helper class related to results.
 * 
 * @export
 * @class ResultsProcessor
 */
export default class ResultsProcessor {
  /**
   * Processes the marks obtained in the results. 
   * For now it calculates total marks, total out of and percentage.
   * It adds the calculated values to the marks object provided and returns it.
   * 
   * @param {any} marks 
   * @returns 
   */
  static processMarks(marks) {
    const tempMarks = marks;

    // process the marks
    const subjects = Object.keys(tempMarks.marks);
    let totalMarks = 0;

    for (let i = 0; i < subjects.length; i += 1) {
      const currentSubject = subjects[i];
      totalMarks += tempMarks.marks[currentSubject];
    }

    const totalOutOf = 100 * subjects.length;
    let percentage = (totalMarks / totalOutOf) * 100;
    percentage = percentage.toFixed(2);

    // attach the data
    tempMarks.percentage = percentage;
    tempMarks.totalMarks = totalMarks;
    tempMarks.totalOutOf = totalOutOf;
    tempMarks.grade = GradeProcessor.getGrade(tempMarks.percentage);

    return tempMarks;
  }


  /**
   * Processes each result and the marks for each result.
   * 
   * @static
   * @param {array} results 
   * @returns 
   * @memberof ResultsProcessor
   */
  static processResults(results) {
    const processedResults = results.map((marks) => {
      const processedMarks = ResultsProcessor.processMarks(marks);
      return processedMarks;
    });

    return processedResults;
  }
}
