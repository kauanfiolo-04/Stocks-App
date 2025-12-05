import { Schema, model, models, type Document, type Model } from "mongoose";

export interface WatchlistItem extends Document {
  userId: string;
  symbol: string;
  company: string;
  addedAt: Date;
};

const WathclistSchema = new Schema<WatchlistItem>(
  {
    userId: { type: String, required: true, index: true },
    symbol: { type: String, required: true, uppercas: true, trim: true  },
    company: { type: String, required: true, trim: true },
    addedAt: { type: Date, default: Date.now }
  },
  { timestamps: false }
);

// Prevent duplicate symbols per user
WathclistSchema.index({ userId: 1, symbol: 1 }, { unique: true });

export const Watchlist: Model<WatchlistItem> =
  (models?.Watchlist as Model<WatchlistItem>) || model<WatchlistItem>("watchlist", WathclistSchema);