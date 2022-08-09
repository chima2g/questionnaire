import { getFormattedAnswer, isValidQuestion } from "../helpers";

describe("getFormattedAnswer", () => {
  test("empty formatter function to NOT change returned answer", () => {
    expect(getFormattedAnswer("answerString", answer => answer)).toEqual("answerString");
  });

  test("undefined formatter function to NOT format returned answer", () => {
    expect(getFormattedAnswer("answerString", undefined)).toEqual("answerString");
  });

  test("valid formatter function to correctly format returned answer", () => {
    expect(getFormattedAnswer("answerString", (answer) => answer.concat(" 1234"))).toEqual("answerString 1234");
  });
})

const dialog = {question: "what is 1 in words", answer: "one"};

describe("isValidQuestion", () => {
  test("returns true when no previous dialog", () => {
    expect(isValidQuestion([], () => {})).toBe(true);
    expect(isValidQuestion([], )).toBe(true);
    expect(isValidQuestion(undefined, )).toBe(true);
    expect(isValidQuestion(undefined, () => {})).toBe(true);
  });

  test("returns true when validateQuestionFunc returns true", () => {
    expect(isValidQuestion([dialog], () => true)).toBe(true);
    expect(isValidQuestion([dialog], (prevDialog) => prevDialog[0].answer === "one")).toBe(true);
  });

  test("returns false when validateQuestionFunc returns false", () => {
    expect(isValidQuestion([dialog], () => false)).toBe(false);
    expect(isValidQuestion([dialog], (prevDialog) => prevDialog[0].answer === "two")).toBe(false);
  });
})