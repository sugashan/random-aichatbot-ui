import { Component } from "@angular/core";
import { ChatbotWidgetComponent } from "./chatbot-widget/chatbot-widget.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ChatbotWidgetComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "random-aichatbot-ui";
}
