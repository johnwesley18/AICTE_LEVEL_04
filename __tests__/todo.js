/* eslint-disable no-undef */

const todoList = require("../todo");
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "play cricket",
      completed: false,
      dueDate: yesterday,
    });
    add({
      title: "hit the gym",
      completed: false,
      dueDate: today,
    });
    add({
      title: "submit project",
      completed: false,
      dueDate: tomorrow,
    });
  });
  test("add", () => {
    const count = all.length;
    add({
      title: "attend AICTE session",
      completed: true,
      dueDate: today,
    });
    expect(all.length).toBe(count + 1);
  });
  test("markAsComplete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("overdue_items", () => {
    let overdue_list = overdue();
    expect(overdue_list.length).toBe(1);
    expect(overdue_list[0]).toBe(all[0]);
  });
  test("dueToday_items", () => {
    let dueToday_list = dueToday();
    expect(dueToday_list.length).toBe(2);
    expect(dueToday_list[0]).toBe(all[1]);
    expect(dueToday_list[1]).toBe(all[3]);
  });
  test("dueLater_items", () => {
    let dueLater_list = dueLater();
    expect(dueLater_list.length).toBe(1);
    expect(dueLater_list[0]).toBe(all[2]);
  });
});