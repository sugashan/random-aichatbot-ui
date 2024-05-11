import { Component, effect, inject } from "@angular/core";
import { NgClass } from "@angular/common";
import { FormsModule, NgForm } from "@angular/forms";
import { ChatServiceService } from "../service/chat.service.service";

@Component({
  selector: "app-chatbot-widget",
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: "./chat-widget.component.html",
  styleUrl: "./chat-widget.component.scss",
})
export class ChatbotWidgetComponent {
  private readonly messageService = inject(ChatServiceService);

  readonly messages = this.messageService.messages;
  readonly generatingInProgress = this.messageService.generatingInProgress;

  private readonly scrollOnMessageChanges = effect(() => {
    this.messages();

    // scroll after the messages render
    setTimeout(() =>
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      })
    );
  });

  sendMessage(form: NgForm, messageText: string): void {
    this.messageService.sendMessage(messageText);
    form.resetForm();
  }
}
