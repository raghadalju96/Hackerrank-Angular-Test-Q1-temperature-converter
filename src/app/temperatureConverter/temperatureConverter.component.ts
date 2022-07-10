import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {
  Celsius = "";
  Fahrenheit = "";

  ngOnInit() {}

  onChange(temType: string | null, type: "Celsius" | "Fahrenheit") {
    if (temType === null) {
      this.Fahrenheit = "";
      this.Celsius = "";
      return;
    }

    const temperature = Number(temType);

    if (type === "Celsius") {
      this.Fahrenheit = ((temperature * 9) / 5 + 32).toFixed(1);
    } else {
      this.Celsius = (((temperature - 32) * 5) / 9).toFixed(1);
    }
  }
}
