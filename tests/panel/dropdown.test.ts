import { describe, it, expect, beforeEach } from 'vitest';

import { DropdownComponent, MeasuringStation } from '../../src/ts/panel/dropdown';

describe("DropdownComponent", () => {
  let dropdown: DropdownComponent;
  let dropdownId = "test-dropdown";
  let measuringStations: MeasuringStation[] = [
    { id: "station1", name: "Station 1" },
    { id: "station2", name: "Station 2" },
    { id: "station3", name: "Station 3" },
  ];

  beforeEach(() => {
    dropdown = new DropdownComponent(dropdownId, measuringStations);
  });

  it("should render the dropdown with options", () => {
    let dropdownElement: HTMLSelectElement = dropdown.render();
    // Assert if dropdown component is rendered as expected
    let optionElements = dropdownElement.querySelectorAll("option");
    expect(dropdownElement).not.toBeNull();
    expect(dropdownElement.id).toBe(dropdownId);
    // One more option for the initial placeholder
    expect(optionElements).toHaveLength(measuringStations.length + 1);
    optionElements.forEach((option, index) => {
      if (index === 0) {
        expect(option.value).toBe("");
        expect(option.disabled).toBe(true);
        expect(option.selected).toBe(true);

      }
      else {
        let station: MeasuringStation = measuringStations[index - 1];
        expect(option.value).toBe(station.id);
        expect(option.textContent).toBe(station.name);
      }
    });
  });
});